import request from "request";

/**
 * Configure proxying routes for image data.
 * @param app
 */
export const configureImageDataRoutes = (app) => {
    let imageServiceUri = process.env.IMAGE_SERVICE_URI || "http://localhost:3000";
    const imageClient = request.defaults({
        baseUrl: imageServiceUri,
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
