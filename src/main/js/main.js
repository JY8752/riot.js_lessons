import '@riotjs/hot-reload'
import { component } from 'riot'
import 'semantic-ui-riot'
import App from './app10.riot'

component(App)(document.getElementById('app'), {
    title: 'Semantic UI Riot Demo'
})