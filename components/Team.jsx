import React from 'react'
import Section from './Section'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styles from "../styles/Team.module.scss"
import Image from 'next/image'
import { RiDoubleQuotesL} from "react-icons/ri"

const Members = ({imgSource, country, comment, name, profession}) =>{
    return( 
    <div className={styles.client}>
        <div className={styles.info}>
            <div className={styles.country}>
                <div className={styles.svg}>
                    <RiDoubleQuotesL/>
                </div>
                <span>{country}</span>
            </div>
            <p className={styles.comment}>{comment}</p>
            <div className={styles.who}>
                <span className={styles.name}>{name}</span>
                <span className={styles.profession}>{profession}</span>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <div className={styles.inner}>
                <Image 
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    layout="responsive"
                    src={imgSource}
                />
                <div className={styles.border}></div>
            </div>
        </div>
    </div>
    );
};

Members.defaultProps = {
    imgSource: "/images/member.png",
    country: "ARG",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse fugiat facere non? Aliquam nobis hic architecto, reiciendis ipsum obcaecati dicta fuga perspiciatis vero quo minima nostrum est? Minima, iste.",
    name: "Matias",
    profession: "Web Developer",
}

const Team = () => {
  return (
    <Section
        subtitle="Durodev Team"
        title="This is the team you can trust"
        id="team"
    >
        <Carousel emulateTouch showThumbs={false} showStatus={false}>
            <Members
                imgSource={"/member1.png"}
                country={"Argentina"}
                profession={"Web Developer"}
                comment={"Durodev aims to be the best option to start growing your business at the lowest cost"}
                name={"Matias Duro"}
            />
            <Members
                imgSource={"/member2.png"}
                country={"Argentina"}
                comment={"UX/UI Design is my passion, I'm also a web developer"}
                profession={"UX/UI Designer"}
                name={"Lisa Bauer"}
            />
            <Members
                imgSource={"/member3.jpg"}
                country={"Argentina"}
                comment={"miau miau, asi es!"}
                profession={"App Developer"}
                name={"Joy Bauer"}
            />
        </Carousel>
    </Section>
  )
}

export default Team