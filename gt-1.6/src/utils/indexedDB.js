const dbName = 'statsDB';
const storeName = 'tokens';

async function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onerror = (event) => {
            console.error('Error opening IndexedDB:', event.target.error);
            reject(event.target.error);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore(storeName, { keyPath: 'key' });
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
    });
}

async function saveToken(token) {
    const db = await initDB();
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const data = { key: 'a5bd252617mshcc1a82ac5cc5b16p1273b2jsne720a4d0ab23', value: token };

    store.put(data);

    return new Promise((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = (event) => {
            console.log.error('Error saving token to IndexedDB:', event.target.error);
            reject(event.target.error);
        };
    });
}

async function getToken() {
    const db = await initDB();
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);

    return new Promise((resolve, reject) => {
        const request = store.get('a5bd252617mshcc1a82ac5cc5b16p1273b2jsne720a4d0ab23');

        request.onsuccess = (event) => {
            const data = event.target.result;
            resolve(data ? data.value : null);
        };

        request.onerror = (event) => {
            console.error('Error getting token from IndexedDB:', event.target.error);
            reject(event.target.error);
        };
    });
}

export { saveToken, getToken };