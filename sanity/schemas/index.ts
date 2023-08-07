import pagesSchema from "./pages";
import badgeSchema from "./badge";
import gameSchema from "./game";
import memberSchema from "./member";
import postSchema from "./post";
import recommendedCategoriesSchema from "./recomendedCategories";
import recommendedGamesSchema from "./recomendedGames";
import sliderSchema from "./slider";

export const schemaTypes = [
	badgeSchema,
	gameSchema,
	postSchema,
	sliderSchema,
	recommendedGamesSchema,
	recommendedCategoriesSchema,
	memberSchema,
	pagesSchema,
];
