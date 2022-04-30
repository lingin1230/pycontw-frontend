<template>
    <i18n-page-wrapper class="md:px-20 lg:px-20">
        <core-h1 :title="$t('title')" class="page-title"></core-h1>
        <div class="flex justify-between">
            <div class="map-area">
                <p
                    v-text="$t('content')[0]"
                    class="
                        px-10
                        text-sm text-justify
                        font-serif
                        leading-6
                        tracking-widest
                    "
                ></p>
                <div class="map" :style="communityMapStyle"></div>
            </div>
            <div class="arrow-top" :class="{ hide: boxScroll }">⌃</div>
            <div class="communities" ref="communities">
                <div
                    v-for="(community, index) in $t('communities')"
                    :key="`community_${community.tag}`"
                >
                    <div class="box" @click="popupShow(index)">
                        <div class="text">
                            <h3 class="title">
                                {{ community.title }}
                            </h3>
                            <p
                                v-for="(paragraph, i) in community.desc"
                                :key="`paragraph_${i}`"
                            >
                                {{ paragraph }}
                            </p>
                        </div>
                        <img
                            :src="community.imgUrl"
                            :alt="community.tag"
                            class="w-32"
                        />
                    </div>
                    <div class="popup" :class="{ show: popupNum === index }">
                        <div class="content">
                            <button @click="popupClose">✕</button>
                            <img
                                :src="community.imgUrl"
                                :alt="community.tag"
                                class="w-32"
                            />
                            <h4 class="font-serif text-2xl mb-10 mt-5">
                                {{ community.title }}
                            </h4>
                            <p
                                v-for="(paragraph, i) in community.desc"
                                :key="`paragraph_${i}`"
                                class="text-sm"
                            >
                                {{ paragraph }}
                            </p>
                            <core-text-button
                                :href="communityLink[community.tag]"
                                class="my-4"
                                secondary
                                large
                            >
                                官方網站
                            </core-text-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="arrow-down" :class="{ hide: boxScroll === false }">
                ⌃
            </div>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/community.i18n'
import CoreH1 from '@/components/core/titles/H1'
import CommunityMap from '@/static/img/about/CommunityInTW.png'
import CoreTextButton from '@/components/core/buttons/TextButton'
// import ExtLink from '../../components/core/links/ExtLink.vue'

export default {
    i18n,
    name: 'PageCommunity',
    components: {
        I18nPageWrapper,
        CoreH1,
        // ExtLink,
        CoreTextButton,
    },
    data() {
        return {
            communityMap: CommunityMap,
            communityLink: {
                taipei: 'http://www.meetup.com/Taipei-py/',
                pyhug: 'http://www.meetup.com/pythonhug/',
                tainan: 'http://www.meetup.com/Tainan-py-Python-Tainan-User-Group/',
                pyladiestw: 'https://tw.pyladies.com/',
                kaohsiung: 'http://www.meetup.com/Kaohsiung-Python-Meetup/',
                hualien: 'http://www.meetup.com/Hualien-Py/',
                djangogirlstaipei: 'https://djangogirls.org/taipei/',
                nantou: 'https://www.facebook.com/%E5%8D%97%E6%8A%95python-113209870215893/',
                taichung: 'https://www.facebook.com/groups/780250978715991/',
            },
            popupNum: null,
            boxScroll: true,
        }
    },
    mounted() {
        this.$refs.communities.addEventListener('scroll', this.handleScroll)
    },
    // watch: {
    //     boxScroll() {
    //         // this.scrollWatch()
    //         console.log('jerryjerryjerryjerryjerryjerryjerryjerry')
    //     },
    // },
    computed: {
        communityMapStyle() {
            return {
                'background-image': `url(${this.communityMap})`,
                'background-repeat': 'no-repeat',
                'background-size': 'contain',
                'background-position': 'center',
            }
        },
    },
    methods: {
        popupShow(index) {
            this.popupNum = index
        },
        popupClose() {
            this.popupNum = null
        },
        handleScroll() {
            const scrollTop = this.$refs.communities.scrollTop
            const offsetHeight = this.$refs.communities.offsetHeight
            if (scrollTop > 0 && scrollTop < offsetHeight) {
                this.boxScroll = null
            } else if (scrollTop === 0) {
                this.boxScroll = true
            } else if (scrollTop > offsetHeight) {
                console.log('bottom')
                this.boxScroll = false
            }
        },
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.page-title {
    @apply justify-start ml-10;
}
.map-area {
    width: 55%;
}
.map-area .map {
    @apply mt-20 mb-8 w-full;
    aspect-ratio: 622/653;
}
.arrow-top,
.arrow-down {
    @apply absolute text-xl left-1/2  w-full;
    content: '⌃';
    padding-left: 80%;
    transform: translateX(-55%) translateY(-100%);
    transition: opacity 0.3s;
}
.arrow-down {
    top: 130%;
    transform: translateX(-55%) translateY(200%) scaleY(-1);
}
.arrow-top.hide,
.arrow-down.hide {
    opacity: 0;
}
.communities {
    @apply relative w-2/5;
    height: 1010px;
    overflow-y: auto;
}
.communities .box {
    @apply flex justify-between items-center mt-6 cursor-pointer min-h-full px-7 py-6;
    background: #1f1c3b;
    border-radius: 24px;
    -webkit-tap-highlight-color: transparent;
}
.communities div:first-of-type .box {
    margin-top: 0px;
}
.communities .box .title {
    @apply mt-0 mb-3 font-serif font-bold text-xl;
    color: #a9a6d6;
}
.communities .box p {
    @apply text-xs mb-0;
    line-height: 146.9%;
    width: 225px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
}
.communities .popup {
    @apply fixed hidden justify-center items-center w-screen h-screen left-0 top-0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
}
.communities .popup.show {
    display: flex;
}
.communities .popup .content {
    @apply relative flex justify-center items-center flex-col rounded-3xl p-10;
    border: 3px solid #e099e1;
    background-color: #121023;
    width: 724px;
    height: 575px;
}
.communities .popup .content button {
    @apply absolute top-5 right-7 text-2xl font-bold;
    color: #e099e1;
}
</style>
