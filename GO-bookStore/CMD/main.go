package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/rs/cors"
	"github.com/zaid/GO-bookStore/PKG/routes"
)

func main() {
	r := mux.NewRouter()

	routes.RegisterBookStoreRoutes(r)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./frontend/build/")))

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"}, // Adjust as needed
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type"},
		AllowCredentials: true,
	})

	http.Handle("/", r)
	fmt.Println("Server is being started...")
	log.Fatal(http.ListenAndServe("localhost:9010", c.Handler(r)))

}
