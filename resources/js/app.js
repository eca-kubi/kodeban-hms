import {createApp, h} from 'vue'
import {createInertiaApp, Head, Link} from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import 'devextreme/dist/css/dx.light.css';

InertiaProgress.init()

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    title: title => `${title} - Kodeban HMS`,
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .mount(el)
    },
})
