

export default function ProductsList(props) {
	return (
		<div className="ui grid">
			{displayItems(props)}
		</div>
	)
}

function displayItems(props) {
	return (
		props.data.map((item) => {
			return (
				<div className="four wide column">
					<div className="ui card">
						<div className="image">
							<img src={item.image} />
						</div>
						<div className="content">
							<div className="header">
								{item.title}
							</div>
							<div className="description">
								{item.description}
							</div>
						</div>
						<div className="extra content">
							Price: {item.price}
						</div>
						<button 
							className="ui teal basic button" 
							value="details"
						>
							More Details
						</button>
						<button 
							className="ui teal primary button" 
							value="purchase" 
							onClick={props.onClick}
						>
							Purchase
						</button>
					</div>
				</div>
			)
		})
	)
}