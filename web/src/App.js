import { AuthProvider } from '@redwoodjs/auth'

import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider type="dbAuth">
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>
    </AuthProvider>
  </FatalErrorBoundary>
)

export default App
