// import Header from "./components/test_components/header.jsx";
// import Navigator from "./components/test_components/navigation.jsx";
// const Article = require("./components/test_components/article.jsx");
// const NotFound = require("./components/test_components/notfound.jsx");


//Props data for Test_Components
// const header = "Основная страница";
// const article = "Второстепенная страница";
// const notFoundText = "Страница не найдена";

ReactDOM.createRoot(
    document.getElementById("app")
)

    .render(
        <Provider store={Store}>
            <BrowserRouter>
                <div>
                    {/* Test_Navigation_for_Components */}
                    {/* <Navigator /> */}
                    <Routes>


                        {/* Test_Components_Routs */}
                        {/* <Route path="/main/*" element={<Header text={header} />} />
                        <Route path="/about" element={<Article content={article} />} />
                        <Route path="*" element={<NotFound data={notFoundText} />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );