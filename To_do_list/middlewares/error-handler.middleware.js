export default function (err, req, res, next) {
    console.log(err);
    if (err.name === "ValidationError") {
        return res.status(400).json({ errorMessage: err.message });
    }

    return res
    .status(500)
    .json({errorMessage : "서버에서 에러가 발생했습니다."});
}