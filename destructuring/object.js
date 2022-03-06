// Object 다루기

const settings = {
    notifications: {
        follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        theme: "dark"
    }
};

// before
//const follow = settings.notifications.follow;

const { notifications: { follow } } = settings;
const { notifications: { follow2 = false } } = settings;
const { notifications2: { follow3 = false } = {} } = settings;

console.log(follow);
console.log(follow2);
console.log(follow3);

const { color : { theme = "light"} } = settings;
console.log(theme);
