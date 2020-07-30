import React, { useState, useEffect } from "react";

export default function AllKitties({ allKitties }) {
	const [kittyAvatarsURL, setKittyAvatarsURL] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const init = async () => {
			allKitties.forEach((kitty) => {
				const kittyAvatarURL = `https://api.adorable.io/avatars/100/${kitty[2]}${kitty[3]}.png`;
				setKittyAvatarsURL((kittyAvatarsURL) => [...kittyAvatarsURL, kittyAvatarURL]);
			});
			setLoading(false);
		};
		init();
	}, [allKitties]);

	// const loadAvatarsURL = () => {};

	if (loading === true) {
		return <div className="mx-3 my-3">Loading..</div>;
	}

	return (
		<div className="mx-3 my-3">
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Generation</th>
						<th>Gene A</th>
						<th>Gene B</th>
						<th>Avatar</th>
					</tr>
				</thead>
				<tbody>
					{allKitties.map((kitty, index) => {
						return (
							<tr key={index}>
								<td>{kitty[0]}</td>
								<td>{kitty[1]}</td>
								<td>{kitty[2]}</td>
								<td>{kitty[3]}</td>
								<td>
									<img src={kittyAvatarsURL[index]} alt="" />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
