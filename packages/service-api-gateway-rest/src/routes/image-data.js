import request from "request";

/**
 * Configure proxying routes for image data.
 * @param app
 */
export const configureImageDataRoutes = (app) => {
    const imageClient = request.defaults({
        baseUrl: "http://localhost:3000",
    });

    app.get("/image-data/cat", (req, res) => {
        imageClient
            .get({
                url: "/cat-image",
            })
            .pipe(res);
    });

    app.get("/image-data/rat", (req, res) => {
        imageClient
            .get({
                url: "/rat-image",
            })
            .pipe(res);
    });

    app.get("/image/*", (req, res) => {
        imageClient
            .get({
                url: req.path,
            })
            .pipe(res);
    });
};