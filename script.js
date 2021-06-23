// Unsplash API
const count = 10;
const apiKey = `AqkgtIlClRqkUvkQfN00EKZKm94kmqCxT3ANGZP0-uc`;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);

    } catch (error) {
        // Catch Errors Here
    }
}

// On Load
getPhotos();