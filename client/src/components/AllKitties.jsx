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

	if (loading === true) {
		return <div className="mx-3 my-3">Loading..</div>;
	}

	return (
		<div className="my-3 allAvatars">
			<h2>All Avatars</h2>
			<table className="table table-hover  table-dark">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Generation</th>
						<th scope="col">Gene A</th>
						<th scope="col">Gene B</th>
						<th scope="col">Avatar</th>
					</tr>
				</thead>
				<tbody>
					{allKitties.map((kitty, index) => {
						return (
							<tr key={index}>
								<th>{kitty[0]}</th>
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
