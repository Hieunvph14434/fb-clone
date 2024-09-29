import { Notify, Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/mdi-v6/mdi-v6.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Global css
import "../../css/quasar/global.scss";

export function registerPlugins(app) {
  app.use(Quasar, {
    plugins: { Notify },
  });
}