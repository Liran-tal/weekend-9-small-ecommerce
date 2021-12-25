

export default function Cart({data, itemsIds}) {
	// TODO: add check if itemsIds is empty and if so, show "cart empty" screen and a return button.
	// TODO: add / buy / delete  buttons
	const items = getItems(data, itemsIds);
	const sumPrice = getSumPrice(items);

	return (
		<table className="ui teal celled table">
			<thead>
				<tr>
					<th>Item</th>
					<th>Description</th>
					<th>Price</th>
				</tr>
			</thead>
			{displayItems(items)}
			<tfoot>
				<tr>
					<th>Total Items</th>
					<th>{items.length}</th>
					<th></th>
				</tr>
				<tr>
					<th>Sum Price</th>
					<th>{sumPrice}</th>
					<th></th>
				</tr>
			</tfoot>
		</table>
	)
}

function displayItems(items) {
	return (
		items.map((item) => {
			return (
				<tbody key={item.id}>
					<tr>
						<td>{item.title}</td>
						<td>{item.description}</td>
						<td>{item.price}</td>
					</tr>
				</tbody>
			)
		})
	)
}

function getItems(data, itemsIds) {
	return data.filter((item) => {
		return itemsIds.includes(item.id)
	})
}

function getSumPrice(items) {
	return items.reduce((sum ,item) => {
		return sum += +item.price;
	}, 0)
}
