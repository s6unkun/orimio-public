async function showRelease() {
  const status = document.querySelector("#release-status");
  const download = document.querySelector("#app-store-link");

  try {
    const response = await fetch("data/app-version.json", { cache: "no-cache" });
    if (!response.ok) throw new Error("Could not load release data");
    const release = await response.json();

    if (release.version === null && release.releasedAt === null && release.appStoreURL === null) {
      status.textContent = "開発中です。公開後、このページからダウンロードできます。";
      return;
    }

    const url = new URL(release.appStoreURL);
    if (url.origin !== "https://apps.apple.com" || url.username || url.password ||
        !/^\/(?:[a-z]{2}\/)?app\/(?:[^/]+\/)?id[1-9]\d*\/?$/.test(url.pathname) ||
        typeof release.version !== "string" || !/^\d+\.\d+(?:\.\d+)?$/.test(release.version) ||
        typeof release.releasedAt !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(release.releasedAt) ||
        new Date(release.releasedAt).toISOString().slice(0, 10) !== release.releasedAt) {
      throw new Error("Invalid release data");
    }

    status.textContent = `バージョン ${release.version}（${release.releasedAt} 公開）`;
    download.href = url.href;
    download.hidden = false;
  } catch {
    status.textContent = "配信情報を取得できませんでした。時間をおいて再読み込みしてください。";
  }
}

showRelease();
