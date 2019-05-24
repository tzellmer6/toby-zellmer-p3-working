const appConfig = require('./appConfig')
require('dotenv').config()

const buildCredentials = ({ PROJECT_ID, PRIVATE_KEY, PRIVATE_KEY_ID }) => ({
  type: 'service_account',
  project_id: PROJECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
  client_email: `${PROJECT_ID}@appspot.gserviceaccount.com`,
  client_id: '',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${PROJECT_ID}%40appspot.gserviceaccount.com`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-event-calendar',
        short_name: 'starter-calendar',
        start_url: '/',
        background_color: appConfig.theme.background,
        theme_color: appConfig.theme.brand,
        display: 'minimal-ui',
      },
    },
    {
        resolve: "gatsby-source-google-spreadsheet",
        options: {
            spreadsheetId: "1Ix4Z9OwtPDpFZ0bKTDrO47DCHu8ATjv-JiDzNaUP6L4",
            spreadsheetName: "Events",
            typePrefix: "GoogleSpreadsheet",
            credentials: {
                "client_email": "toby-164@master-antenna-241420.iam.gserviceaccount.com",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5PQTsehkIyulj\nYMlqYOIFCaCrK+2ijJ0kmZQS4hAmEMbcbjK+sMSx9ZXegoQVq1iwQgTIHTawmjyv\nspePnOWHWaWfvSFmYZRV47eHAS7KL3L+VEoGWMR69kLUMGp9UeLSocfV/3xGgduJ\nQx+Alr1E7cGGrnZoLh3zadVbDngceKerZ7+oqbzI0geLhGoIa0Akmokj5XAiygUw\nyn8pxcPorhkl9GJWYQkHAvHk8w0Lf9T9i3X7jfQoucsxofG+JXiPKtW8DN89LpTO\niGPEUdamyQ+uWmZIMRb+EFeJsGIMK8ywJI1IAfId1Ywvx6hpJtYszPfeYUaYcXHP\nOgZ6nCrvAgMBAAECggEAD9V5cEVXknrVzFrfnKo/Z7LU+wy8OWLPo+tEzwBn5PkW\nJo185PPzPEsDzotVgwysfhSGmBx3Kk1k1pfrgKkmrZUqJSdjjX7V0Smv7GhbeYjo\nyXinAzffQ6t9NuoUkDXJr7uIe3BlTRmYjHkiXjmEYDn6iuqq0GjwwnfPdwMbnUNF\na/M3XNKnPmNMAdgYPRig5bZAcfTYgMM8nR7jMDb/AsHnbljldn3qW/6RAHEdWUsR\nY7fG2uKcBtjuCGOZkQFQMdjgJGKUR7ri/hKv+3z3DMHexXEWS8ToXwE0BYtjjZbj\nhjoF0rnSm+iCe/HMqVG6VMv0yqYiMjLO8Q92LcZY8QKBgQD6EEZfC2RqRz58y7Yl\nkf+ouhtONIv0zNwvE+UGtk4Y1EBDnzjrYJfIBk2Z3vUQxebsvc9big6SoIK4w54R\ndNzmkzdIW+s63Rt+08qcNB8VvfepUu/cxQTKC6oxhdzu0hFofc9t7qyBdqb+/v2T\nNmPs2tHCz+DEiHZmjtzQUJRvjQKBgQC9osdK3D3qipmOWloCDgGp9C2bQbrMJcZ5\nJZoOBAwhcuQAGvYmSROFGMtqh9xFGIUibqizgFQEhA8AFx1JRcUt8aqHAvdLnZ9B\nExE4tBLU8BZs4K2K2B3DIDU0a9yKH2UxmotozA1EhWfWvllFxRGHIxT/7Y6ixFmt\nk5t8qlN3awKBgQCip9VuW1Wsv7zIpiVL2OTIVo4OV6W1zU9nm/Q8Ynb4NY+7rKT0\njfcMl/UAIoObrm7gDTME4w9JlviQwEVgK3jIzneGLKwctNf+rjq7UjfqB5BB5n25\nR7ouxlmlLuKfwaqrIjK72iUBbTGA6lH84MMsvMT2iAs3K2CAo2rEYbW7vQKBgFmv\nqZeDEBlj0Xncy2LbYvgRDpy1+nVgjDxxhymHyoDrSF+wYKf8uamh71qDxK49CYIe\nWdUDJTk5h6qgQ+6Ke9XdzKurwG9XraDmNqfdqmZg4go+PHVE/tZw3hjbxmLgtEhA\nchxvHPtCKLkML0ZrDH4gHmdn36SlPlB0Vf4gw/bfAoGATdVfXtKqDEmE8KGn4etP\nCYpdUQYVWw6HheeeXxJVDdvfJdj6wjgxBkJyp6XWd/i4PnvWqW9BQI7MwMQV5Pn2\nVwO7z+KYBjtkmZ61nzGpewQLAkISKqb2Z10o0P7XHOSv2ssiBRZi9htP8ZVRckWz\n3tzqYIXh5HOCRVn+PvvdMwI=\n-----END PRIVATE KEY-----\n"
            }
        }
    }
  ],
}
