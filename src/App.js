import './App.css'
import {Component} from 'react'
import BrowsingHistoryItem from './components/BrowsingHistoryItem'
// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class BrowserHistory extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onChageSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const modifiedList = historyList.filter(each => each.id !== id)
    this.setState({historyList: modifiedList})
  }

  render() {
    const {historyList, searchInput} = this.state

    const filteredList = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const lengthOfFilteredList = filteredList.length

    const renderHistory = () => {
      if (lengthOfFilteredList === 0) {
        return (
          <div className="emtey-history-container">
            <p>There is no history to show</p>
          </div>
        )
      }
      return (
        <ul className="ul-el">
          {filteredList.map(each => (
            <BrowsingHistoryItem
              browsingDetails={each}
              key={each.id}
              deleteHistory={this.deleteHistory}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="bg-container">
        <div className="upper-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search history"
              className="search-bar"
              onChange={this.onChageSearch}
              value={searchInput}
            />
          </div>
        </div>
        {/* Lower container */}
        <div className="lower-container">{renderHistory()}</div>
      </div>
    )
  }
}

export default BrowserHistory
