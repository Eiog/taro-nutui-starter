import presetWeapp from "unocss-preset-weapp";
import {
  transformerClass,
  transformerAttributify,
  defaultAttributes,
  defaultIgnoreNonValuedAttributes,
} from "unocss-preset-weapp/transformer";
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      prefix: "we-",
      isH5: process.env.TARO_ENV === "h5",
      platform: "taro",
    }),
    presetIcons({
      // 其他选项
      prefix: "i-",
      scale: 1.2,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  shortcuts: [
    {
      "border-base": "border border-gray-500_10",
      center: "flex justify-center items-center",
    },
  ],
  transformers: [
    transformerAttributify({
      nonValuedAttribute: true,
      classPrefix: "we-",
      attributes: [...defaultAttributes, "w", "h"],
      ignoreNonValuedAttributes: [
        ...defaultIgnoreNonValuedAttributes,
        "flex-center",
      ],
    }),
    transformerClass(),
    transformerDirectives(),
  ],
});
