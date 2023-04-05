import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ navigation, charityNumber, children }) => (
  <>
    <Header navigation={navigation} />
    <main>
      {children}
    </main>
    <Footer navigation={navigation} charityNumber={charityNumber} />
  </>  
)

export default Layout

Layout.propTypes = {
  navigation: PropTypes.object,
  children: PropTypes.array
}