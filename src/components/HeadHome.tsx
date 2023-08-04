import { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../data/dbStore.json";

const HeadStyle = styled.div``;

interface HeadItem {
	image: string;
	alt: string;
	title: string;
	link: string;
  }
  
  interface HeadData {
	[key: string]: HeadItem;
  }

const HeadHome = () => {
	const [banner, setBanner] = useState<HeadData | null>(null);

	useEffect(() => {
		setBanner(data.head[2]);
	}, []);

	console.log(banner);

	return (
		<HeadStyle>
			{Object.keys(banner).map((key) => {
				const item = banner[key];
				return (
					<div key={key}>
						<img src={item.image} alt={item.alt} />
						<h2>{item.title}</h2>
						<a href={item.link}>Explore</a>
					</div>
				);
			})}
		</HeadStyle>
	);
};

export default HeadHome;
