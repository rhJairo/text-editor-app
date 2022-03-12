import Head from "next/head";
import styles from "../styles/Home.module.css";

import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";

import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Text Editor App</title>
        <meta
          name="description"
          content="Generated by create next app, made by Jairo Rubio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className="bg-[#f1f1f1] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Create a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="ml-5 md:ml-20 h-20 w-20 border-0"
            >
              <Icon name="more_vert" size="3xl" color="gray" />
            </Button>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-red-700">
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </div>

            <p className="ml-2 mt-2 font-semibold text-gray-700">Blank</p>
          </div>
        </div>
      </section>
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
      </section>
    </div>
  );
}
