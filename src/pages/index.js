import axios from "axios";

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/team`);

    return {
      props: {
        team: data,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

export { default } from "../containers/PowerUp";
