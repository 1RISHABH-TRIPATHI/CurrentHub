import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid2,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchErrorLanguage,
  fetchLoadingLanguage,
  setLanguageCode,
  uplaodAllLanguageData,
} from "../../Store/LanguageSlice";
import { Close } from "@mui/icons-material";
function LanguageDialog({ open, ToggleLanguage }) {
  const dispatch = useDispatch();
  const { loading, list, errorMessage, languageCode } = useSelector(
    (state) => state.Language
  );

  useEffect(() => {
    try {
      dispatch(fetchLoadingLanguage());
      setTimeout(() => {
        dispatch(uplaodAllLanguageData(data));
      }, 5000);
    } catch (error) {
      dispatch(FetchErrorLanguage());
    }
  }, [dispatch]);
  const language = data?.reduce((lt, item) => {
    lt[item.code] = item.language;
    return lt;
  }, {});
  if (errorMessage) {
    return (
      <Dialog open={open} onClick={ToggleLanguage} onClose={ToggleLanguage}>
        <DialogContent>
          <img
            src="https://res.cloudinary.com/duih8hld2/image/upload/v1728990865/news/nwy6akwbpvzkbfzu8mzg.jpg"
            height={500}
            alt=""
          />
          <Typography
            sx={{
              fontFamily: "monospace",
              textAlign: "center",
              fontSize: "22px",
            }}
          >
            {errorMessage}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button>
            <Close onClick={ToggleLanguage} />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  return (
    <>
      <Dialog open={open} onClick={ToggleLanguage}>
        <DialogTitle>
          <Typography
            sx={{
              fontSize: "23px",
              fontFamily: "monospace",
              backgroundColor: "red",
              WebkitBackgroundClip: "text",
              textAlign: "center",
            }}
          >
            LANGUAGE TYPE
          </Typography>
        </DialogTitle>
        <Divider sx={{ backgroundColor: "red" }} />
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {loading ? (
              <Skeleton width={130} />
            ) : (
              <Typography>Default language :</Typography>
            )}
            {loading ? (
              <Skeleton variant="text" width={80} height={30} />
            ) : (
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontSize: "20px",
                }}
              >
                {language[languageCode]}
              </Typography>
            )}
          </Box>
          <Grid2
            container
            justifyContent={"center"}
            sx={{
              mt: 4,
            }}
            alignItems={"center"}
            spacing={4}
          >
            {loading
              ? Array.from(new Array(30)).map((_, index) => (
                  <Grid2 key={index} xs={12} sm={6} md={4} lg={3}>
                    <Skeleton
                      variant="rectangular"
                      width={100}
                      height={45}
                      sx={{
                        borderRadius: "12px",
                        transition: "all 0.3s ease-in-out",
                      }}
                    />
                  </Grid2>
                ))
              : list.map((Item, index) => {
                  return (
                    <Grid2 Item key={index} xs={12} sm={6} md={4} lg={3}>
                      <Button
                        variant="outlined"
                        sx={{
                          width: "100%",
                          height: "45px",
                          borderRadius: "12px",
                          transition: "all 0.3s ease-in-out",
                          ":hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                        onClick={() => {
                          dispatch(setLanguageCode(Item.code));
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "monospace",
                            fontStyle: "italic",
                          }}
                        >
                          {Item.language}
                        </Typography>
                      </Button>
                    </Grid2>
                  );
                })}
          </Grid2>
        </DialogContent>
        <DialogActions>
          {loading ? (
            <Skeleton width={70} height={40} />
          ) : (
            <Button
              sx={{
                ":focus": {
                  outline: "none",
                },
              }}
              onClick={ToggleLanguage}
            >
              Close
            </Button>
          )}
          {loading ? (
            <Skeleton width={70} height={40} />
          ) : (
            <Button
              sx={{
                ":focus": {
                  outline: "none",
                },
              }}
              onClick={ToggleLanguage}
            >
              OK
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LanguageDialog;

const data = [
  { id: 1, language: "Albanian", code: "sq" },
  { id: 2, language: "Amharic", code: "am" },
  { id: 3, language: "Arabic", code: "ar" },
  { id: 4, language: "Armenian", code: "hy" },
  { id: 5, language: "Assamese", code: "as" },
  { id: 6, language: "Azerbaijani", code: "az" },
  { id: 7, language: "Bambara", code: "bm" },
  { id: 8, language: "Basque", code: "eu" },
  { id: 9, language: "Belarusian", code: "be" },
  { id: 10, language: "Bengali", code: "bn" },
  { id: 11, language: "Bosnian", code: "bs" },
  { id: 12, language: "Bulgarian", code: "bg" },
  { id: 13, language: "Burmese", code: "my" },
  { id: 14, language: "Catalan", code: "ca" },
  { id: 15, language: "Central Kurdish", code: "ckb" },
  { id: 16, language: "Chinese", code: "zh" },
  { id: 17, language: "Croatian", code: "hr" },
  { id: 18, language: "Czech", code: "cs" },
  { id: 19, language: "Danish", code: "da" },
  { id: 20, language: "Dutch", code: "nl" },
  { id: 21, language: "English", code: "en" },
  { id: 22, language: "Estonian", code: "et" },
  { id: 23, language: "Filipino", code: "pi" },
  { id: 24, language: "Finnish", code: "fi" },
  { id: 25, language: "French", code: "fr" },
  { id: 26, language: "Galician", code: "gl" },
  { id: 27, language: "Georgian", code: "ka" },
  { id: 28, language: "German", code: "de" },
  { id: 29, language: "Greek", code: "el" },
  { id: 30, language: "Gujarati", code: "gu" },
  { id: 31, language: "Hausa", code: "ha" },
  { id: 32, language: "Hebrew", code: "he" },
  { id: 33, language: "Hindi", code: "hi" },
  { id: 34, language: "Hungarian", code: "hu" },
  { id: 35, language: "Icelandic", code: "is" },
  { id: 36, language: "Indonesian", code: "id" },
  { id: 37, language: "Italian", code: "it" },
  { id: 38, language: "Japanese", code: "jp" },
  { id: 39, language: "Kannada", code: "kn" },
  { id: 40, language: "Kazakh", code: "kz" },
  { id: 41, language: "Khmer", code: "kh" },
  { id: 42, language: "Kinyarwanda", code: "rw" },
  { id: 43, language: "Korean", code: "ko" },
  { id: 44, language: "Kurdish", code: "ku" },
  { id: 45, language: "Latvian", code: "lv" },
  { id: 46, language: "Lithuanian", code: "lt" },
  { id: 47, language: "Luxembourgish", code: "lb" },
  { id: 48, language: "Macedonian", code: "mk" },
  { id: 49, language: "Malay", code: "ms" },
  { id: 50, language: "Malayalam", code: "ml" },
  { id: 51, language: "Maltese", code: "mt" },
  { id: 52, language: "Maori", code: "mi" },
  { id: 53, language: "Marathi", code: "mr" },
  { id: 54, language: "Mongolian", code: "mn" },
  { id: 55, language: "Nepali", code: "ne" },
  { id: 56, language: "Norwegian", code: "no" },
  { id: 57, language: "Oriya", code: "or" },
  { id: 58, language: "Pashto", code: "ps" },
  { id: 59, language: "Persian", code: "fa" },
  { id: 60, language: "Polish", code: "pl" },
  { id: 61, language: "Portuguese", code: "pt" },
  { id: 62, language: "Punjabi", code: "pa" },
  { id: 63, language: "Romanian", code: "ro" },
  { id: 64, language: "Russian", code: "ru" },
  { id: 65, language: "Samoan", code: "sm" },
  { id: 66, language: "Serbian", code: "sr" },
  { id: 67, language: "Shona", code: "sn" },
  { id: 68, language: "Sindhi", code: "sd" },
  { id: 69, language: "Sinhala", code: "si" },
  { id: 70, language: "Slovak", code: "sk" },
  { id: 71, language: "Slovenian", code: "sl" },
  { id: 72, language: "Somali", code: "so" },
  { id: 73, language: "Spanish", code: "es" },
  { id: 74, language: "Swahili", code: "sw" },
  { id: 75, language: "Swedish", code: "sv" },
  { id: 76, language: "Tajik", code: "tg" },
  { id: 77, language: "Tamil", code: "ta" },
  { id: 78, language: "Telugu", code: "te" },
  { id: 79, language: "Thai", code: "th" },
  { id: 80, language: "Traditional Chinese", code: "zht" },
  { id: 81, language: "Turkish", code: "tr" },
  { id: 82, language: "Turkmen", code: "tk" },
  { id: 83, language: "Ukrainian", code: "uk" },
  { id: 84, language: "Urdu", code: "ur" },
  { id: 85, language: "Uzbek", code: "uz" },
  { id: 86, language: "Vietnamese", code: "vi" },
  { id: 87, language: "Welsh", code: "cy" },
  { id: 88, language: "Zulu", code: "zu" },
];
