import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import styles from "./BgmiTabs.module.css"
const BgmiTabs = () => {
  interface TagsList {
    name: string
    link: string
  }
  const [tags, setTags] = useState<TagsList[]>([
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
    {
      name: "Hogwarts Championship",
      link: "/tag-search",
    },
    {
      name: "Fire",
      link: "/tag-search",
    },
  ])
  const { theme, setTheme } = useTheme()

  const [isDarkTheme, setIsDarkTheme] = useState<string>("")
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light")
  }, [theme])
  return (
    <>
      <section className={`${styles.tags_}`}>
        {tags.map((item, index) => {
          return (
            <Link
              href={item.link}
              className={`${styles.tags} bg-grayCard 
                    text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                    dark:hover:text-brandLightOpacity100
                    dark:hover:bg-brandLightOpacity20 `}
              key={index}
            >
              <span>{item.name}</span>
            </Link>
          )
        })}
      </section>
    </>
  )
}

export default BgmiTabs
