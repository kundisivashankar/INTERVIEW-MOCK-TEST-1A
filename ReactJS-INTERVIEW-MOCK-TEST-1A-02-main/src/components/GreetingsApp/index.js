import {Component} from 'react'
import {
  AppContainer,
  TabsList,
  Tab,
  Button,
  Image,
  Heading,
} from './StyledComponents'

class GreetingsApp extends Component {
  state = {
    activeTabId: this.props.languageGreetingsList[0].id,
  }

  updateActiveTabId = activeTabId => {
    this.setState({activeTabId})
  }

  getContent = () => {
    const {activeTabId} = this.state
    const {languageGreetingsList} = this.props

    return languageGreetingsList.find(item => item.id === activeTabId)
  }

  renderTabsList = () => {
    const {languageGreetingsList} = this.props
    const {activeTabId} = this.state

    return (
      <TabsList>
        {languageGreetingsList.map(item => {
          const onButtonClick = () => this.updateActiveTabId(item.id)

          return (
            <Tab key={item.id}>
              <Button isActive={item.id === activeTabId} onClick={onButtonClick}>
                {item.buttonText}
              </Button>
            </Tab>
          )
        })}
      </TabsList>
    )
  }

  render() {
    const {imageUrl, imageAltText} = this.getContent()

    return (
      <AppContainer>
        <Heading>Multilingual Greetings</Heading>
        {this.renderTabsList()}
        <Image src={imageUrl} alt={imageAltText} />
      </AppContainer>
    )
  }
}

export default GreetingsApp
