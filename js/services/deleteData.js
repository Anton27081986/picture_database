export async function deleteData(url, data) {
    const result = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    });

    return await result.json();
}

