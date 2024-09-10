// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('g7cr_202408');

db.books.aggregate([
    {$project:
        {totalbooks:{$size:"$title"}}
    },

    {$group:{_id:"$author"}},

    
    {}

])



db.books.aggregate(

       
    [

         
        {$project:{_id:0,id:1,title:1,
            review_count:{$size:"$reviews"},
            // rating:{$avg:"$reviews.rating"}
            rating:{$ifNull:[
                {$avg:"$reviews.rating"},
                "not reviwed"
                
            ]
            
        }}},

        {$match:{review_count:{$gt:0}}}
    ]
)

use('g7cr_202408');
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




use('g7cr_202408');
db.books.aggregate([
  {
      $unwind: {
          path: "$reviews",
          preserveNullAndEmptyArrays: true
      }
  },
  {
      $group: {
          _id: "$authorId",
          books: { $sum: 1 },
          avg_price: { $avg: "$price" },
          avg_rating: { $avg: "$reviews.rating" },
          reviewCount: { $sum: 1 }
      }
  },
  {
      $project: {
          author: "$_id",
          count: "$books",
          avg_price: "$avg_price",
          avg_rating: "$avg_rating",
          votes: "$reviewCount"
      }
  }
])

// db.authors.aggregate([
//     {   
//       $lookup: {
//         from: "books",
//         localField: "id",
//         foreignField: "authorId",
//         as: "books"
//       }
//     },


//    {
//     $group: {
//       _id: "$name",
//     books: {
//        $sum : {$size:"$books.title"}
       
//       },
//       average_price:{$avg:"$books.price"}
//     }
// }
//  ]);


// lallu code
db.authors.aggregate([
  {
      $lookup: {
          from: "books",
          localField: "id",
          foreignField: "authorId",
          as: "books"
      }
  },
  // {
  //     $unwind: {
  //         path: "$books",
  //         preserveNullAndEmptyArrays: true
  //     }
  // },
  {
    $unwind: {
        path: "$books",
        ..
    }
},
  {
      $group: {
          _id: "$name",
          author_photo: { $first: "$photo" },
          books_written: { $push: "$books.title" },
          total_reviews: { $sum: "$books.reviews" },
          average_price: { $avg: "$books.price" },
          total_rating: { $avg: "$books.rating" }
      }
  },
  {
      $project: {
          _id: 0,
          author_name: "$_id",
          author_photo: 1,
          books_written: 1,
          total_reviews: 1,
          average_price: 1,
          total_rating: 1
      }
  }
]);


  
// db.books.aggregate([
//     {
//         $lookup: {
//           from: "authors",
//           localField: "authorId",
//           foreignField:"id",
//           as: "authorInfo"
//         }},
       

//         {$project:{
//             title:1,
            
//             result:{biography:1}
        
//         }}
    
       
    
// ])
