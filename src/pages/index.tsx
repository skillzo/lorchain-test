import Head from "next/head";
import style from "../styles/Home.module.css";
import HomeLayout from "@/components/layouts/HomeLayout";
import Profile from "@/components/profile/Profile";
import Repo from "@/components/cards/Repo";
import { useQuery } from "react-query";
import axios from "axios";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import Feedbacks from "@/components/feedbacks/Feedbacks";
import { BsPerson, BsSearch } from "react-icons/bs";
import { MdCancelPresentation } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import ReactPaginate from "react-paginate";

interface props {
  selected: number;
}

export default function Home() {
  const [searchUser, setSearchUser] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const repoUrl = `https://api.github.com/users/${searchUser}/repos?page=${pageNumber}&per_page=4&sort=updated`;
  const userUrl = `https://api.github.com/users/${searchUser}`;

  // api call using react query
  const {
    data: userData,

    refetch: refetchUser,
  } = useQuery(
    "gitUser",
    async () => {
      return axios.get(userUrl);
    },
    {
      enabled: false,
    }
  );
  const {
    data: repoData,
    refetch: refetchRepo,
    isLoading,
    isError,
  } = useQuery(
    "repoList",
    async () => {
      return axios.get(repoUrl);
    },
    {
      enabled: false,
    }
  );

  // user information
  const user = userData?.data;
  const repo = repoData?.data;

  // pagination params
  const totalPages = Math.round(user?.public_repos / 4);
  const dataViewed = pageNumber * 4;
  const handleClick = ({ selected }: props) => {
    setPageNumber(selected + 1);
    refetchRepo();
  };

  return (
    <>
      <Head>
        <title>Lorchain - Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar
        search={searchUser}
        setSearch={setSearchUser}
        refetchUser={refetchUser}
        refetchRepo={refetchRepo}
      />
      <HomeLayout>
        {/* initialState before user intracts */}
        {!userData && !repoData && !isLoading && !isError && (
          <Feedbacks
            component={<BsSearch size={100} />}
            text=" Start with searching a GitHub user"
          />
        )}

        {/* data is loading  */}
        {isLoading && (
          <Feedbacks
            component={
              <PulseLoader speedMultiplier={0.5} size={30} color="#0064EB" />
            }
          />
        )}

        {/* if an error occured */}
        {isError && (
          <Feedbacks
            component={<BsPerson size={100} />}
            text="User not found"
          />
        )}

        {/* render the user info */}
        {userData && !isError && (
          <div className="space-y-[3em] md:space-y-[5em] lg:space-y-0 lg:flex lg:justify-between">
            {userData && (
              <div className="lg:w-[25%]">
                <Profile user={user} />
              </div>
            )}

            {/* if the repo is empty */}
            {repo?.length < 1 && (
              <Feedbacks
                component={<MdCancelPresentation size={100} />}
                text="Repository list is empty"
              />
            )}
            {repoData && repo?.length > 0 && (
              <section className="space-y-[1.5em] lg:w-[70%]">
                <h1 className="text-2xl lg:text-3xl font-semibold">
                  Repositories ({user?.public_repos})
                </h1>

                <div className="space-y-4 lg:w-[80%]">
                  {repo?.map((item: any) => {
                    return (
                      <Repo
                        key={item.id}
                        url={item.html_url}
                        name={item.name}
                        description={item.description}
                      />
                    );
                  })}
                </div>

                {/* paginate the result */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[1em] items-end  md:items-center justify-end  lg:w-[80%]">
                  <div className="text-[#808080] text-sm md:text-base ">
                    {pageNumber} - {pageNumber + 4} of {totalPages} items
                  </div>
                  <ReactPaginate
                    previousLabel={<GrFormPrevious color="#0064eb" size={25} />}
                    nextLabel={<GrFormNext color="#808080" size={25} />}
                    breakLabel="..."
                    pageRangeDisplayed={3}
                    pageCount={totalPages || 5}
                    onPageChange={handleClick}
                    containerClassName={style.container}
                    pageLinkClassName={style["page-link"]}
                    activeLinkClassName={style.active}
                  />
                </div>
              </section>
            )}
          </div>
        )}
      </HomeLayout>
    </>
  );
}
