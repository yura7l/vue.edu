const AppSwitcherAuto = {
    data() {
        return {
            switcherTitle: 'Scheme',
            lightStyles: [{
                    href: 'assets/css/switcher/light.min.css',
                    media: '(prefers-color-scheme: light)'
                }],
            darkStyles: [{
                href: 'assets/css/switcher/dark.min.css',
                media: '(prefers-color-scheme: dark)'
            }],
            switcherRadios: document.querySelectorAll('.switcher__radio'),
            themes: [
                {
                    value: 'light',
                    label: 'Light',
                    checked: false
                },
                {
                    value: 'auto',
                    label: 'System',
                    checked: true
                },
                {
                    value: 'dark',
                    label: 'Dark',
                    checked: false
                }],
            scheme: this.setupScheme(),
        }
    },
    methods: {
        toggleSwitcher(state){
            this.state = state
            localStorage.setItem('switcher_state', state)
        },
        setupScheme() {
            let savedScheme = this.getSavedScheme();
            const systemScheme = this.getSystemScheme();

            console.log(savedScheme, systemScheme)

            if (savedScheme === null){
                savedScheme = 'auto'
            }else if (savedScheme !== systemScheme) {
                this.setScheme(savedScheme);
            }

            this.setScheme(savedScheme);

            return savedScheme;
        },
        setScheme(scheme) {
            this.switchMedia(scheme);

            for(let i in this.themes){
                this.themes[i].checked = this.themes[i].value === scheme;
            }
            this.scheme = scheme

            if (scheme === 'auto') {
                this.clearScheme();
            } else {
                this.saveScheme(scheme);
            }
        },
        switchMedia(scheme) {
            if(scheme === 'auto'){
                this.lightStyles.media = '(prefers-color-scheme: light)'
                this.darkStyles.media = '(prefers-color-scheme: light)'
            }else{
                this.lightStyles.media = (scheme === 'light') ? 'all' : 'not all'
                this.darkStyles.media = (scheme === 'dark') ? 'all' : 'not all'
            }
        },
        getSavedScheme(){
            return localStorage.getItem('color-scheme');
        },
        saveScheme(){
            localStorage.setItem('color-scheme', this.scheme);
        },
        clearScheme(){
            localStorage.removeItem('color-scheme');
        },
        getSystemScheme(){
            const darkScheme = matchMedia('(prefers-color-scheme: dark)').matches;

            return darkScheme ? 'dark' : 'light';
        }
    },
    computed: {

    },
    watch: {

    }
}

Vue.createApp(AppSwitcherAuto).mount('#app')

/*const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const switcherRadios = document.querySelectorAll('.switcher__radio');

function setupSwitcher() {
    const savedScheme = getSavedScheme();

    if (savedScheme !== null) {
        const currentRadio = document.querySelector(`.switcher__radio[value=${savedScheme}]`);
        currentRadio.checked = true;
    }

    [...switcherRadios].forEach((radio) => {
        radio.addEventListener('change', (event) => {
            setScheme(event.target.value);
        });
    });
}

function setupScheme() {
    const savedScheme = getSavedScheme();
    const systemScheme = getSystemScheme();

    if (savedScheme === null) return;

    if (savedScheme !== systemScheme) {
        setScheme(savedScheme);
    }
}

function setScheme(scheme) {
    switchMedia(scheme);

    if (scheme === 'auto') {
        clearScheme();
    } else {
        saveScheme(scheme);
    }
}

function switchMedia(scheme) {
    let lightMedia;
    let darkMedia;

    if (scheme === 'auto') {
        lightMedia = '(prefers-color-scheme: light)';
        darkMedia = '(prefers-color-scheme: dark)';
    } else {
        lightMedia = (scheme === 'light') ? 'all' : 'not all';
        darkMedia = (scheme === 'dark') ? 'all' : 'not all';
    }

    [...lightStyles].forEach((link) => {
        link.media = lightMedia;
    });

    [...darkStyles].forEach((link) => {
        link.media = darkMedia;
    });
}

function getSystemScheme() {
    const darkScheme = darkSchemeMedia.matches;

    return darkScheme ? 'dark' : 'light';
}

function getSavedScheme() {
    return localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
    localStorage.setItem('color-scheme', scheme);
}

function clearScheme() {
    localStorage.removeItem('color-scheme');
}

setupSwitcher();
setupScheme();*/
