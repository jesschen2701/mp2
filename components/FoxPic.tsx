import styled from "styled-components";
import type {Fox} from "../interfaces/Fox.ts";


interface FoxPicProps {
    data: Fox[];
}

const Page = styled.main`
    width : 90%;
    max-width: 900px;
    margin: auto;
    padding: 20px;
    font-family: "Sniglet", system-ui;
`;

const Title = styled.h1`
    text-align: center;
    margin: 20px;
    color: #b75800;
`;

const Description = styled.p`
    text-align: center;
    margin: 20px;
`

const FoxCard = styled.div`
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 3px solid black;
    text-align: center;
`
const FoxID = styled.h2`
    color: #632705;
`

const FoxImage = styled.img`
    display: block;
    max-width: 100%;
    margin: 20px auto;
`

const FoxLink = styled.a`
    color: darkgreen;
    text-decoration: none;
`

export default function FoxGallery(props: FoxPicProps) {
    return (
        <Page>
            <Title>
                Random Fox Gallery
            </Title>
            <Description>
                Random foxes retrieved from the RandomFox API. (very cute!)
            </Description>
            {props.data.map((fox: Fox) => (
                <FoxCard key={fox.id}>
                    <FoxID>
                        Fox #{fox.id}
                    </FoxID>
                    <FoxImage src={fox.image} alt={`Fox ${fox.id}`}/>
                    <p>
                        <FoxLink href={fox.link} target="_blank">
                            View Fox
                        </FoxLink>
                    </p>
                </FoxCard>
            ))}
        </Page>
    )
}
