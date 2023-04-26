import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Homepage</title>
        <meta name="description" content="myhomepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          안녕하세요 FRONTEND DEVELOPER 이은영 입니다.
        </h1>
        <div className={styles.description}>SKILL</div>
        <div className={styles.descriptio}>HTML CSS JAVASCRIPT TypeScript</div>
        <div className={styles.descriptio}>ES6 AWS Docker GIT</div>

        <h1 className={styles.title}></h1>
        <a href=" https://occipital-road-050.notion.site/b9264d658480462bb90e429419095f1d">
          Notion
        </a>
        <a href=" https://github.com/gmdmsdud/ ">Git</a>
      </main>
    </div>
  );
}
