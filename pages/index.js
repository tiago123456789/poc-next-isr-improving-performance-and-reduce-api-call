import axios from "axios"
import { useEffect, useState } from "react"
import NotFound from "../components/NotFound";
import Preloader from "../components/Preloader";
import Section from "../components/Section";

export default function Component(props) {
    const [event, setEvent] = useState(null);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const site = (location.origin.replace(/(https:\/\/|http:\/\/)/g, "").split(":")[0])
        if (props.events[site]) {
            setEvent(props.events[site])
        } else {
            setIsNotFound(true)
        }
    }, [])

    return (
      <>
        {
           (event && !isNotFound) && <>
              <img src={event.logo} style={{ width: "100%", height: "300px"}}/>
              <Section section={event.section1} /> 
            </>
        }
        <Preloader isShow={(!event && !isNotFound)} />
        <NotFound isNotFound={isNotFound} />
      </>
    )
}


export async function getStaticProps() {
    const events = await axios.get("http://localhost:5000/events")
    return {
      props: {
        events: events.data
      },
      revalidate: 120 
    }
  }