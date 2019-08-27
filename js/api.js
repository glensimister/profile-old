export function readProfile() {
    const endpoint = 'sampleData/profile.json';
    return new Promise(resolve => {
        $.getJSON(endpoint, function (res) {
            resolve(res);
        });
    });
}
