import { type BookType } from "~/shared/types/book.types";

interface BookProps {
    children?: React.ReactNode;
    book: BookType
}

export const BookComponent: React.FC<BookProps> = ({children, book}) => {

    return (<div>
                <p>{book.title}</p>
                { (book.author) ? 
                    <p>{book.author[0].firstname} {book.author[0].lastname}</p>
                    : <></>
                }
                <p>{book.genre}</p>
                {children}
            </div>);
};