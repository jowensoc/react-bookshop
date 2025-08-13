import { BookComponent } from "~/shared/components/book-component/bookcomponent";

export function Shop() {
  return (
    <main>
        <div id="books-catalogue">
            <p>Books</p>
            <BookComponent book={{ bookid: 1, title: 'The Stand', genre:'Horror', 
                                    author: [{authorid: 1, 
                                    firstname: 'Stephen', 
                                    lastname: 'King'}] }} >
                                    <p>On Sale: 50% off!</p>
            </BookComponent>
        </div>
    </main>
  );
}
