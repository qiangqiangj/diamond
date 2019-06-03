<template>
    <Layout class="main-contain">
        <Header class="header">
            <Title/>
        </Header>
        <Layout>
            <Sider ref="collaps" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed" class="aside">
                <!--<Aside></Aside>-->
            </Sider>
            <Layout>
                <Content>Content</Content>
                <Footer :style="{background: '#fff',padding: '0',borderTop: '1px solid #dcdee2 '}">
                    <Button type="text" @click.native="collapsedSider">
                        <i :class="rotateIcon"></i>
                    </Button>
                    <Button type="text">
                        <i class="fa fa-code"></i>
                    </Button>
                </Footer>
            </Layout>
        </Layout>
    </Layout>
</template>

<script>

    import Title from "../../components/title";
    // import Aside from "../../components/aside";
    const fs=require('fs')
    export default {
        name: "Main",
        components: {Title},
        data() {
            return {
                name: 'tom',
                isCollapsed: false,
            }
        },
        computed: {
            rotateIcon() {
                return this.isCollapsed ? 'fa fa-folder-open-o' : 'fa fa-folder-o';
            },
            codeIcon() {
                return this.isCollapsed ? 'fa fa-code' : 'fa fa-folder-o';
            }
        },
        methods: {
            collapsedSider() {
                this.$refs.collaps.toggleCollapse();
            }
        }
    }
</script>

<style scoped>
    .main-contain {
        min-height: 100vh;
    }

    .header {
        height: 30px;
        line-height: 30px;
        padding: 0 16px;
        position: relative;
        text-align: left;
        background-color: #2C423F;
        -webkit-app-region: drag;
    }


    .layout {
        /*border: 1px solid #d7dde4;*/
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .aside {
        border-right: 1px solid #dcdee2;
        background: #fff;
    }
</style>