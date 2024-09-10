
use('g7cr_202408');

//1st_ 
db.books.aggregate(
    [
        
        {
            $unwind: {
              path: "$reviews",
              preserveNullAndEmptyArrays: true
            }
          },
        {$group:{_id:"$author",
          
          books: { "$addToSet": "$title" },
          average_price:{$avg:"$price"},
          average_rating:{$avg:"$reviews.rating"},

        }},
    {
      $project:{_id:1,
        books_count:{ "$size": "$books" },
        author:1,
       average_price:1,
       average_rating:1

      }
    }
        
    ]      
)

//-------------2nd-----------------------

use('g7cr_202408');
db.authors.aggregate([
    {
      "$lookup": {
        "from": "books",
        "localField": "id",
        "foreignField": "authorId",
        "as": "books"
      }
    },
    {
      $unwind: {
        path: "$books",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $unwind: {
        path: "$books.reviews",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: "$name",
        authorName: { "$first": "$name" },
        authorPhoto: { "$first": "$photo" },
        books: { "$addToSet": "$books.title" },
        
        averagePrice: { "$avg": "$books.price" },
        totalRating: { 
          $avg: "$books.reviews.rating" 
        }
      }
    },
    
    {
      $project: {
        _id: 0,
        authorName: 1,
        authorPhoto: 1,
        books: 1,
        booksWrittenCount: { "$size": "$books" },
      
        averagePrice: 1,
        totalRating: 1
      }
    }
  ]
  )

//-------------------3rd--------------
use('g7cr_202408');
db.books.aggregate([
       
   
    {
        $unwind :  "$tags",      
    },
    {
        $group : {
            _id : '$tags',
            tagcount : {$sum : 1},
            reviewCount : {$sum :{$size : "$reviews"}},
            avg_rating : {$avg : "$rating"},
 
        }
    },
    {
        $project : {
            tags : "$_id",
            book_count : "$tagcount",
            reviews_count : "$reviewCount",
            avg_rating : {
                $ifNull : [
                    "$avg_rating",
                    "Not Reviewed"
                ]
            }
        }
    }
    ])


