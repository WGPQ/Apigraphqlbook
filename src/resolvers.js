const { db } = require('./db/database')

const bookResolver = {
    Query: {
        book(root, { id }) {
            if (id == undefined) {
                return queryDB("select * from book").then(data => data);
            }
            return queryDB("select * from book where id=?", id).then(data => data);
        }

    },
    Mutation: {
        async createBook(root, { book }) {
            if (book === undefined) return null;
            let res = await queryDB("insert into book SET ?;", book).then(data => data);
            return res;
        },
        updateBookInfo: (root, { book }) => queryDB("update book SET ? where id = ?", [book, book.id]).then(data => data),
        deleteBook: (root, { id }) => queryDB("delete from book where id = ?", id).then(data => data)
    }

}

async function queryDB(sql, args) {
    return new Promise((resolve, reject) => {
        db.query(sql, args, (err, rows) => {
            if (err)
                return reject(err);
          rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
        });
    });
}


exports.resolvers = bookResolver;

