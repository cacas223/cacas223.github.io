function switchNightMode() {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),
        setTimeout(function() {
            document.querySelector('body').classList.contains('DarkMode') ? (document.querySelector('body').classList.remove('DarkMode'), localStorage.setItem('isDark', '0'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')) : (document.querySelector('body').classList.add('DarkMode'), localStorage.setItem('isDark', '1'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')),
                setTimeout(function() {
                    document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
                    document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
                    setTimeout(function() {
                        document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
                    }, 1e3);
                }, 2e3)
        })
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
        document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')
        new Vue({
            data: function() {
                this.$notify({
                    title: "关灯了😜",
                    message: "当前已成功切换至黑夜模式!",
                    position: 'top-left',
                    offset: 400,
                    showClose: true,
                    type: "warning",
                    duration: 5000
                });
            }
        })
    } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        document.querySelector('body').classList.add('DarkMode'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')
        new Vue({
            data: function() {
                this.$notify({
                    title: "开灯了😜",
                    message: "当前已成功切换至白天模式！",
                    position: 'top-left',
                    offset: 400,
                    showClose: true,
                    type: "warning",
                    duration: 5000
                });
            }
        })
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
}