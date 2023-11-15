import './index.css'

const BrowsingHistoryItem = props => {
  const {browsingDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browsingDetails
  const onDeleteHistoryItem = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <div className="list-item-container">
        <p className="time-stamp">{timeAccessed}</p>
        <img src={`${logoUrl}`} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={onDeleteHistoryItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowsingHistoryItem
