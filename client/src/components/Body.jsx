import React, { useState, useEffect } from "react";

export default function Body({ allKitties }) {
	const [kittyAvatarsURL, setKittyAvatarsURL] = useState([]);

	useEffect(() => {
		allKitties.forEach((kitty) => {
			const kittyAvatarURL = `https://api.adorable.io/avatars/100/${kitty[2]}${kitty[3]}.png`;
			setKittyAvatarsURL((kittyAvatarsURL) => [...kittyAvatarsURL, kittyAvatarURL]);
		});
	}, []);

	// const getAvatar = (allKitties) => {
	// 	allKitties.forEach((kitty) => {
	// 		const kittyAvatarURL = `https://api.adorable.io/avatars/${kitty[2]}${kitty[3]}/.png`;
	// 		setKittyAvatarsURL((kittyAvatarsURL) => [...kittyAvatarsURL, kittyAvatarURL]);
	// 	});
	// {
	// 	const kittyAvatarURL = `https://api.adorable.io/avatars/${allKitties[i][2]}${allKitties[i][3]}/.png`;
	// 	setKittyAvatarsURL((kittyAvatarsURL) => [...kittyAvatarsURL, kittyAvatarURL]);
	// }
	// };
	return (
		<div>
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
							<tr>
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
