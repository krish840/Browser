const HistoryItem = props => {
  const {HistoryDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt={title} />
      <h1>{title}</h1>
      <p>{domainUrl}</p>
      <button type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
