import React, { PureComponent } from 'react'
import { Box } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Calendar from '../components/Calendar'
import ModalEvent from '../components/ModalEvent'
import Layout from '../components/PageLayout'
import groupEventsByMonth from '../utils/groupEventsByMonth'
import ConfigContext from '../components/ConfigContext'


const SPREADSHEET_QUERY = graphql`
  query eventsQuery {
     allGoogleSpreadsheetEventsFormResponses1{
      edges {
        node {
          id
          eventName: whatIsTheEventName_
          date: whatDateWillTheEventTakePlaceOn_
          place: whereIsTheEventLocated_
        }
      }
    }
  }
`

class CalendarPage extends PureComponent {
  initialState = {
    currentDay: new Date(),
    eventsOfTheDay: [],
    showModal: false,
  }

  state = this.initialState

  hideModal = () => this.setState(this.initialState)

  showModal = (eventsOfTheDay, currentDay) =>
    this.setState({
      currentDay,
      eventsOfTheDay,
      showModal: true,
    })

  render() {
    const { currentDay, eventsOfTheDay, showModal } = this.state

    return (
      <Layout>
        <Box id="calendars" animation="fadeIn" margin="medium">
          <ConfigContext.Consumer>
            {({ limitMonthInTheFuture }) => (
              <StaticQuery
                query={SPREADSHEET_QUERY}
                render={data => (
                  <Calendar
                    showModal={this.showModal}
                    events={groupEventsByMonth(data, limitMonthInTheFuture)}
                  />
                )}
              />
            )}
          </ConfigContext.Consumer>
        </Box>

        {showModal && (
          <ModalEvent
            hideModal={this.hideModal}
            currentDay={currentDay}
            events={eventsOfTheDay}
          />
        )}
      </Layout>
    )
  }
}

export default CalendarPage
