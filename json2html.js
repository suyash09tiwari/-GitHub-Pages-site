export default function json2html(data) {
    let table = `<table data-user="suyash943tiwari@gmail.com">`;
    table += `<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>`;
    table += `<tbody>`;
    data.forEach(person => {
        table += `<tr><td>${person.Name}</td><td>${person.Age}</td><td>${person.Gender || ""}</td></tr>`;
    });
    table += `</tbody></table>`;
    return table;
}