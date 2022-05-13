import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "a032575c-51f3-45f5-ac29-ac97dd432588"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return (
            instance.delete(`follow/${userId}`)
        )
    },
    getProfile(usersId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(usersId);
    }
};

export const profileAPI = {
    getProfile(usersId) {
        return instance.get(`profile/` + usersId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status});
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
}














