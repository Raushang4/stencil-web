import styles from './index.module.css'
import React, { FC } from 'react'

const LaunchPage: FC<{ theme: any; config: any; compConfig: any }> = ({
  theme,
  config,
  compConfig,
}) => {
  return (
    <div
      className={`${styles.container}`}
      style={{
        background: config?.launchPageColor || theme?.palette?.primary?.light,
      }}
    >
      {config?.logo && (
        <img
          className={styles.loginImage}
          src={config?.logo}
          alt="launchPageLogo"
          width={220}
          height={233}
        />
      )}
      <span style={{ color: theme?.palette?.primary?.main }}>launch page </span>
    </div>
  )
}

export default LaunchPage
