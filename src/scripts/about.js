import '../../node_modules/swiper/css/swiper.css'
import Commits from './Swiper';

const commits = new Commits();

function githubApi(renderCommit) {
    fetch('https://api.github.com/repos/jorianp/NewsAnalyzer/commits')
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Код ошибки: ${res.status}`);
        })
        .then((data) => {
            renderCommit(data)
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
        });
}
githubApi(commits.createCommit);